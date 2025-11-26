"use server";

export async function validateLogin(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  // Test it out:
  console.log(rawFormData);
}

export async function createUser(formData: FormData) {
  const signUpData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  // Test it out:
  console.log(signUpData);
}
