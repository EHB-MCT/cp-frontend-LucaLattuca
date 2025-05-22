import React, {useEffect, useState} from "react";


const Stories = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error("Error fetching stories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    if (loading) {
        return <div>Stories Loading...</div>;
    }
    
    return (
        <ul id="stories">
            {stories.map((story) => (
                <li className="story" key={story.id}>
                    <img src={story.imgThumbnail} alt={story.imgThumbnail} />
                    <h2>{story.fairytale}</h2>
                </li>
            ))}
        </ul>
    );
};

export default Stories; 