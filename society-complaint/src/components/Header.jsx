export default function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search complaints..." />
      <div className="profile">
        <span>🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
        />
      </div>
    </header>
  );
}
