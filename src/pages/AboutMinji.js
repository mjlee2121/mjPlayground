import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer"
import MinjiPhoto from "../assets/AboutMinji/MinjiPhoto.png";

import Pilates from '../assets/hobby/pilates.jpg';
import Climbing from '../assets/hobby/climbing.jpg';
import Korean_food from '../assets/hobby/korean_food.jpg';
import Plant from '../assets/hobby/plant.jpg';
import Sailing from '../assets/hobby/sailing.jpg';
import Triathlon from '../assets/hobby/triathlon.jpg'

import "./AboutMinji.css"

const journals = [
  { id: 1, title: "Building a URL Shortener with FastAPI & Redis", path: "/sr-be" },
  { id: 2, title: "Exploring Modern JS Features & ES6 Methods", path: "/jses6" },
  { id: 3, title: "Designing Interactive UI Components in React", path: "/sr-fe" },
];

const hobbyPhotos = [
   { id: 1, src: Pilates, alt: 'Pilates' },
   { id: 2, src: Climbing, alt: 'Climbing' },
   { id: 3, src: Korean_food, alt: 'Korean_food' },
   { id: 4, src: Plant, alt: 'Plant' },
   { id: 5, src: Sailing, alt: 'Sailing' },
   { id: 6, src: Triathlon, alt: 'Triathlon' },
]

const AboutMinji = () => {
  return (
    <div className="universal-bg app-layout">
      <NavBar />
      <main className="main-content dashboard-grid">
        
        {/* Card 1: Top-Left (Photo + Hello Message Combined) */}
        <section className="card profile-card">
          <div className="photo-frame">
            <img src={MinjiPhoto} alt="Minji" className="minji-photo" />
          </div>
          <div className="intro-text">
            <h2>Hello & Welcome!</h2>
            <p>
              Hi, I am Minji! Welcome to my playground where I showcase my software development projects, 
              interactive UI experiments, and tech explorations. It's purely interest-based, so you might come 
              across random stuff next to another random stuff. Take a look around!
            </p>
          </div>
        </section>

        {/* Card 2: Top-Right (Spotify Playlist Only) */}
        <section className="card spotify-card">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/1Auym7W5lF9oShTlXedrXo?si=xzjbrBeVTw-WrjwbMgU_6Q"
            width="100%"
            height="352px"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </section>

        {/* Card 3: Bottom-Left (Journals Only) */}
        <section className="card journals-card">
          <h3>Journals</h3>
          <ul className="journal-list">
            {journals.map((journal) => (
              <li key={journal.id}>
                <Link to={journal.path} className="journal-link">
                  {journal.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Card 4: Bottom-Right (Hobby Only) */}
        <section className="card hobby-card">
          <h3>Hobby</h3>
          <div className="hobby-scroll-container">
            {hobbyPhotos.map((photo)=> (
              <Link key={photo.id} to="/hobby" className="hobby-photo-link">
              <img src={photo.src} alt={photo.alt} className="hobby-img"/>
              </Link>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutMinji;