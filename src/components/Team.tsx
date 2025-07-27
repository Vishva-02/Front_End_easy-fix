const Team = () => {
  const members = [
    { name: "Give a name", role: "Lead Mechanic", img: "/team1.jpg" },
    { name: "Give a name", role: "Customer Support", img: "/team2.jpg" },
    { name: "Give a name", role: "Recovery Expert", img: "/team3.jpg" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={i} className="text-center">
            <img
              src={m.img}
              alt={m.name}
              className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-primary"
            />
            <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
