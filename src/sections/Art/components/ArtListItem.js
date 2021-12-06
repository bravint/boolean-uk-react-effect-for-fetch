import SubjectList from "./SubjectList";

const ArtListItem = ({ art, iiifUrl }) => {
    const imgUrl = (art) => {
        const imgId = art.image_id;
        const imgSize = "/full/843,/0/default.jpg";
        const url = `${iiifUrl}/${imgId}${imgSize}`;
        return url;
    };

    return (
        <li>
            <div className="frame">
                <img src={imgUrl(art)} alt="" />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <ul>
                <SubjectList art={art} />
            </ul>
        </li>
    );
};

export default ArtListItem;
