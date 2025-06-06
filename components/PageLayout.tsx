import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function PageLayout({ children }: { children: ReactNode }) {
    return (

        <div className="container is-flex is-flex-direction-column is-full-height">
            <Navbar />
            <div className="columns is-centered is-flex-grow-1 m-0 p-0" >
                <div className="column is-four-fifths is-flex is-flex-direction-column p-0">
                    <div className="content is-flex-grow-1 p-3">
                        {children}
                    </div>
                </div>
            </div>
            <footer className="footer footer-radius p-3">
                <div className="content has-text-centered is-italic">
                    &copy; Copyright 2025 Ivalin Chobanov
                </div>
            </footer>
        </div>
    );
}