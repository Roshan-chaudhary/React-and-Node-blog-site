// Main.jsx
import React from 'react';
import styles from "./styles.module.css";
import Blog from "../Blog";

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar_items}>
                    <h1>Daily Blog</h1>
                </div>
                <div className={styles.navbar_items}>
                    <button className={styles.white_btn} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>

            {/* Render the Blog component */}
            <Blog />
        </div>
   );
};

export default Main;

