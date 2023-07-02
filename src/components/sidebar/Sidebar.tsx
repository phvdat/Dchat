const Sidebar = () => {
  const handleSwitchMode = () => {
    if (
      localStorage.getItem("color-theme") &&
      localStorage.getItem("color-theme") === "light"
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  };

  return (
    <div className="w-10">
      <button
        onClick={handleSwitchMode}
        id="theme-toggle"
        type="button"
        className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 border-2"
      >
        dark mode
      </button>
    </div>
  );
};

export default Sidebar;
