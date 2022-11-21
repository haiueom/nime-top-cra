import React from "react";

export default function Person(props) {
  const orang = [
    {
      nama: "Amar Ma'ruf",
      github: "",
      role: "Ketua",
    },
    {
      nama: "Ilham Taufiq",
      github: "",
      role: "Anggota",
    },
    {
      nama: "Elki Aditia A.",
      github: "",
      role: "Anggota",
    },
    {
      nama: "Muhammad Faisal",
      github: "",
      role: "Anggota",
    },
  ];

  return (
    <>
      {props.data.map((github, index) => (
        <div className="flex h-80 w-56 flex-col rounded-lg bg-gray-200 text-center shadow-xl">
          <img
            src={github.avatar_url}
            alt={orang[index].nama}
            title={orang[index].nama}
            className="h-2/3 w-full rounded-t-lg object-cover"
          />
          <h2 className="mt-auto text-2xl font-bold">{orang[index].nama}</h2>
          <p className="mb-auto">{orang[index].role}</p>
        </div>
      ))}
    </>
  );
}
