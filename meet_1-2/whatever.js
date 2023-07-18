try {
  const students = [{ name: "Alice" }];
  console.log(students[1].name);
} catch (error) {
  console.log(error);
  console.log("Student Tidak Ditemukan");
}
