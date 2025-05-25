import React, {use, useEffect, useState} from "react";
import { useNavigate } from "react-router";

const Stories = ({query= ""}) => {
    const navigate = useNavigate();

    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    const filteredStories = stories.filter((story) => 
        story.fairytale.toLowerCase().includes(query.toLowerCase())
    );
    

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
            {filteredStories.map((story) => (
                
                    <li className="story" key={story.id}
                    onClick={() => navigate(`/makingof/${story.id}`)}
                        
                    >
                        {/* TODO */}
                            <img src={story.imgThumbnail} alt={story.imgThumbnail} />
                            <div className="overlay"></div>   
                            <div className="story-info">
                                <h2>{story.fairytale}</h2>
                                <h3>{story.nameStudent}</h3>
                            </div>
                    </li>
                
            ))}
        </ul>
    );
};

export default Stories; 