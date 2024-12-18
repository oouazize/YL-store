"use server";
import { createSupabaseForServerAction } from "@/lib/supabase.server";
import { newProduct } from "@/type";

const convertFormData = (formData: FormData) => {
	// Convert FormData to newProduct type
	let productData: newProduct = {
		title: "",
		images: [],
		description: "",
		price: 0,
		item: "",
		sizes: [],
	};

	formData.forEach((value, key) => {
		if (key === "images" || key === "sizes")
			productData[key].push(value as never);
		else productData[key as keyof newProduct] = value as never;
	});
	return productData;
};

export const handleInsert = async (formData: FormData) => {
	const supabase = createSupabaseForServerAction();
	console.log(formData);

	// Convert FormData to plain object
	const productData = convertFormData(formData);
	const { images, ...newData } = productData;

	const productImages: string[] = [];

	// Upload images to Supabase storage
	try {
		for (let i = 0; i < images.length; i++) {
			const file = images[i];
			if (file.size) {
				console.log(file);
				const fileName = file.name;

				// Upload the image to Supabase storage
				const { data, error } = await supabase.storage
					.from("images")
					.upload(Date.now().toString(), file);
				productImages.push(String(data?.path));
				if (error) {
					console.error("Error uploading image:", error);
					throw error; // Rethrow the error to handle it elsewhere
				}
				console.log(`Uploaded image ${fileName} successfully.`);
			}
		}
	} catch (error) {
		console.error("Error uploading images:", error);
		throw error; // Rethrow the error to handle it elsewhere
	}
	if (!productImages.length) throw new Error("No images were uploaded");
	// Insert form data into the 'product' table
	try {
		const { data, error } = await supabase
			.from("product")
			.insert({ ...newData, images: productImages });
		if (error) throw error;
		console.log("inserting Data: ", data);
	} catch (error) {
		console.error("Error inserting data:", error);
		throw error; // Rethrow the error to handle it elsewhere
	}

	console.log("Insertion and image upload completed successfully.");
};
