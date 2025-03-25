import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';

function Complaint() {

  const tokenData = JSON.parse(localStorage.getItem("Usertoken"));
  const token = tokenData ? tokenData.token : "";

  const [selectedCard, setSelectedCard] = React.useState({});
  const [lawyer, setLawyer] = React.useState([]);
  const [filteredLawyer, setFilteredLawyer] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");  

  React.useEffect(() => {
    axios.get("https://lawyer-management-system-api.onrender.com/lawyer/admin-lawyer")
      .then((response) => {
        setLawyer(response.data);
        setFilteredLawyer(response.data); 
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

 
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = lawyer.filter((lawyer) =>
      lawyer.fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
      lawyer.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    setFilteredLawyer(filtered); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const complaintData = {
      lawyer: selectedCard.card, 
      message: message,
    };

    try {
      const response = await fetch(
        "https://lawyer-management-system-api.onrender.com/user/post-complaint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(complaintData),
        }
      );

      const data = await response.json();

      console.log("Complaint posted:", data);

      alert("Complaint successfully submitted!");
    } catch (error) {
      console.error("Error posting complaint:", error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center border-bottom">
        <div className="col-12 col-lg-8 my-5">

          <h1>Lawyer Search ...?</h1>
          
          <input
            type="search"
            className="form-control mb-3"
            placeholder="Search by Name or Email"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 2fr))',
              gap: 2,
              perspective: '1000px',
            }}
          >
            {filteredLawyer.map((card, index) => (
              <Card
                key={card._id || index}
                sx={{
                  transform: selectedCard.index === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                }}
              >
                <CardActionArea onClick={() => setSelectedCard({ index, card: card._id })}>
                  {/* Front Side */}
                  <div
                    style={{
                      position: 'relative',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {selectedCard !== selectedCard.index && (
                      <CardContent>
                        <Typography variant="h5" component="div" textAlign="center">
                          <img
                            width={150}
                            src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
                            alt="Profile"
                          />
                        </Typography>
                        <Typography variant="h5" component="div">
                          {card.fullName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {card.email}
                        </Typography>
                      </CardContent>
                    )}
                  </div>

                  {/* Back Side */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      transform: 'rotateY(180deg)',
                      display: selectedCard.index === index ? 'block' : 'none',
                      background: '#f9f9f9',
                      padding: '16px',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" textAlign="center" gutterBottom>
                        Complaint a Lawyer
                      </Typography>

                      <textarea
                        rows="5"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>

                      <Typography variant="h6" textAlign="center" gutterBottom>
                        <button onClick={handleSubmit} className='btn btn-warning w-50 text-white'>
                          Submit
                        </button>
                      </Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Complaint;
