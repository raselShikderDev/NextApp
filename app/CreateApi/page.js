const page = () => {
  const data = {
    name: "Rasel Shikder",
    Role: "Frontend Developer",
    Salary: 30000,
  };

  const apiRequest = async () => {
    const res = await fetch("/api/add/route.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div>
      <h1 className="text-blue-600 font-bold text-4xl bg-black">
        Next.js Api Creations Demo
      </h1>
    </div>
  );
};

export default page;
