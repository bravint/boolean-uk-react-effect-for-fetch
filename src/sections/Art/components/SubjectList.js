const SubjectList = ({ art }) => {
    return (
        <div>
            {art.subject_titles.map((element) => {
                return <li>{element}</li>;
            })}
        </div>
    );
};

export default SubjectList;
