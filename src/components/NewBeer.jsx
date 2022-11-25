import { useState } from "react";
import axios from "axios";

function AddBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    try {
      axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
        .then((response) => {
          setName("");
          setTagline("");
          setDescription("");
          setFirstBrewed("");
          setBrewersTips("");
          setAttenuationLevel(0);
          setContributedBy("");
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="AddBeer">
      <h3>Add New Beer</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div>
          <label>First Brewed</label>
          <input
            type="text"
            name="FirstBrewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={first_brewed}
          />
        </div>

        <div>
          <label>Brewers Tips</label>
          <input
            type="text"
            name="BrewersTips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewers_tips}
          />
        </div>

        <div>
          <label>Attenuation Level</label>
          <input
            type="number"
            name="AttenuationLevel"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuation_level}
          />
        </div>

        <div>
          <label>Contributed By</label>
          <input
            type="text"
            name="ContributedBy"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributed_by}
          />
        </div>

        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;
