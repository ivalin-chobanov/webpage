import { ReactNode } from "react";
import Navbar from "./navbar";

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <div className="columns is-centered m-0" style={{minHeight: "100vh"}}>
            <div className="column is-three-quarters is-flex is-flex-direction-column p-0">
                <div className="box mb-2 mt-2 p-1">
                    <Navbar />
                </div>
                <div className="box mt-2 mb-2 p-0 is-flex-grow-1 is-flex-direction-column is-flex">
                    <div className="content is-flex-grow-1 p-3">
                        {children}
                    </div>
                    <footer className="footer footer-radius p-3">
                    <div className="content has-text-centered is-italic">
                        &copy; Copyright 2025 Ivalin Chobanov
                    </div>
                </footer>
                </div>
            </div>
        </div>
    );
}