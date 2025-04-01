const Settings = () => {
    return (
      <div className="settings-page">
        <h1>Settings</h1>
        <p>Manage your preferences and account settings here.</p>
        
        <div className="settings-section">
          <h2>Account Settings</h2>
          <button>Change Password</button>
          <button>Update Email</button>
        </div>
  
        <div className="settings-section">
          <h2>Notifications</h2>
          <label>
            <input type="checkbox" /> Enable Email Notifications
          </label>
          <label>
            <input type="checkbox" /> Enable Push Notifications
          </label>
        </div>
  
        <div className="settings-section">
          <h2>Theme</h2>
          <button>Light Mode</button>
          <button>Dark Mode</button>
        </div>
      </div>
    );
  };
  
  export default Settings;
  