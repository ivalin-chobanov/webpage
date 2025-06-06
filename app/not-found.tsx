import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function NotFound() {
    return (
        <PageLayout>
            <div className="columns is-flex-grow-1" style={{height: "100%"}}>
                <div className="column is-flex is-justify-content-center is-align-items-center" style={{height: "100%"}}>
                    <div className="has-text-centered">
                        <h1 className="title is-size-2">404 | Page Not Found &#128546;</h1>
                        <p className="subtitle is-size-5"><Link href="./" >&larr;Back To Home Page</Link></p>
                    </div>
                    
                </div>

            </div>
        </PageLayout>
    );
}