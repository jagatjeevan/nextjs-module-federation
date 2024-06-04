function Nav() {
  const membersOfHogwarts = [
    "Albus Dumbledore",
    "Minerva McGonagall",
    "Rubeus Hagrid",
    "Severus Snape",
  ];

  const getMembers = () => {
    return membersOfHogwarts.map((member) => (
      <div
        key={member}
        style={{
          border: "1px solid #3e3e3e",
          borderRadius: "5px",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        {member}
      </div>
    ));
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(450px, 1fr)" }}>
      {getMembers()}
    </div>
  );
}

export default Nav;
