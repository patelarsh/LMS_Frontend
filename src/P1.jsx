import { useEffect, useState } from "react";

const RatingsComponent = () => {
    const Lawyertoken = JSON.parse(localStorage.getItem("Lawyertoken"));
  const Usertoken = JSON.parse(localStorage.getItem("Usertoken"));
    const [ratingsRange, setRatingsRange] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await fetch("https://lawyer-management-system-api.onrender.com/lawyer/get-ratting", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${Usertoken.token}`, // Replace <token> with actual token
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch ratings");
                }

                const data = await response.json();
                setRatingsRange(data.ratings); // Assuming API response contains "ratings" array
                setLoading(false);

                console.log(data)
            } catch (error) {
                console.error("Error fetching ratings:", error);
                setLoading(false);
            }
        };

        fetchRatings();
    }, []);

    if (loading) {
        return <p>Loading ratings...</p>;
    }

    return (
        <div className='mt-3'>
          
            {ratingsRange.map((v, index) => (
                <div key={index} className="d-flex gap-3 justify-content-between align-items-center">
                    <h5 className="fw-bold">
                        {v} <i style={{ fontSize: "12px" }} className="fa-solid fa-star text-warning"></i>
                    </h5>

                    <div className="progress" style={{ width: "70%", height: "8px" }}>
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${v}%`, height: "10px" }}
                            aria-valuenow={v}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>

                    <b>90 %</b>
                </div>
            ))}
        </div>
    );  
};

export default RatingsComponent;
