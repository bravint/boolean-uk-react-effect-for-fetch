import { useEffect, useState } from "react";

import ArtsList from "./components/ArtList";

function ArtsSection() {
    const [arts, setArts] = useState([]);

    useEffect(() => {
        const fetchArt = async () => {
            try {
                const response = await fetch(
                    "https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=12&fields=id,title,artist_title,image_id,subject_titles"
                );
                const data = await response.json();
                const fetchedArts = filterFetchedData(data);
                setArts(fetchedArts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchArt();
    }, []);

    const filterFetchedData = (data) => {
        const Array = [];
        Array.push(data.config, data.data);
        return Array;
    };

    if (arts.length === 0) {
        return null;
    } else {
        return (
            <section>
                <h2>Arts Section</h2>
                <div className="scroll-container">
                    <ul className="art-list">
                        <ArtsList arts={arts} />
                    </ul>
                </div>
            </section>
        );
    }
}

export default ArtsSection;
