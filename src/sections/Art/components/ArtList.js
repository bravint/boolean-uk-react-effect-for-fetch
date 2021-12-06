import ArtsListItem from "./ArtListItem";

const ArtList = ({ arts }) => {
    const iiifUrl = "https://www.artic.edu/iiif/2";

    return (
        <ul className="art-list">
            {arts[1].map((art) => (
                <ArtsListItem key={art.id} art={art} iiifUrl={iiifUrl} />
            ))}
        </ul>
    );
};

export default ArtList;
