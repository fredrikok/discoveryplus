import React, { useState, useRef, useEffect } from "react";
import Icon from "../Components/Icons/Icons";
import { FaSearch } from "react-icons/fa";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { IoMdFootball } from "react-icons/io";
import { BsFillGrid3X3GapFill, BsClipboard } from "react-icons/bs";
import { MdFiberNew } from "react-icons/md";
import { Link } from "react-router-dom";
import generes from "../data/generes.json";
import Background from "./Background";
import logo from "../img/logodiscovery.png";

function Header() {
  const [activeGenre, setActiveGenre] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState(false);
  const bottomNavRef = useRef(null);
  const [isBotNavBtnVisible, setIsBotNavBtnVisible] = useState(false);
  const [desc, setDesc] = useState(
    "Tiden begynner å renne ut for guttas festtilværelse."
  );
  const [showLogo, setShowLogo] = useState(
    "https://eu1-prod-images.disco-api.com/2022/08/23/2d1ba262-4a8d-4c0a-b667-88de36336039.png?bf=0&f=png&p=true&q=60&w=400"
  );
  const [background, setBackground] = useState(
    "https://eu1-prod-images.disco-api.com/2022/08/23/6b1a2c0c-d627-49ea-8339-fdfc9f34bf82.jpeg?bf=0&f=jpg&p=true&q=70&w=2000"
  );
  const [title, setTitle] = useState("Hvite Gutter");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (bottomNavRef.current) {
      bottomNavRef.current.scrollBy({
        left: -2000,
        behavior: "smooth",
      });
      setScrollPosition(bottomNavRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (bottomNavRef.current) {
      bottomNavRef.current.scrollBy({
        left: 1000,
        behavior: "smooth",
      });
      setScrollPosition(bottomNavRef.current.scrollLeft);
    }
  };

  const handleGenreClick = (genre) => {
    setActiveGenre(genre);

    const genreObj = generes.generes.find((param) => param.genere === genre);

    if (genreObj) {
      setDesc(genreObj.shortDesc);
      setShowLogo(genreObj.showLogo);
      setBackground(genreObj.background);
      setTitle(genreObj.title);
    }
  };

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    const bottomNavRect = bottomNavRef.current?.getBoundingClientRect();

    if (
      bottomNavRect?.top &&
      bottomNavRect?.bottom &&
      bottomNavRect?.top < window.innerHeight &&
      bottomNavRect?.bottom > 0
    ) {
      setIsBotNavBtnVisible(true);
    } else {
      setIsBotNavBtnVisible(false);
    }

    if (currentPosition > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
    setScrollPosition(currentPosition);
  };

  return (
    <>
      <div id="background-div" className="background">
        <picture>
          <img src={background} alt={"Stort bilde av: " + title}></img>
        </picture>
      </div>

      <header className={`header ${active ? "scrolled" : ""}`}>
        {" "}
        <div className="topnav">
          <picture>
            <img className="logo" src={logo} alt="Discovery+" />
          </picture>
          <nav className="nav">
            <ul>
              <Link href="/">
                <Icon icon={AiFillHome} className="icon" />
                Hjem
              </Link>
              <Link href="/sport">
                <Icon icon={IoMdFootball} />
                Sport
              </Link>
              <Link href="/">
                <Icon icon={BsFillGrid3X3GapFill} />
                Utforsk
              </Link>
              <Link href="/">
                <Icon icon={BsClipboard} />
                TV-guide
              </Link>
              <Link href="/search">
                <Icon icon={FaSearch} />
                Søk
              </Link>
            </ul>
            <div className="button">
              <Link href="/dog">log inn</Link>
              <Link className="active" href="/dog">
                Få tilgang
              </Link>
            </div>
          </nav>
        </div>
        {/* BottomNav */}
        <nav className="bottomnav">
          <div className="botnavbtn">
            <button
              className="navbuttonleft"
              disabled={scrollPosition === 0}
              onClick={handleScrollLeft}
            >
              ◀
            </button>
            <button
              className="navbuttonright"
              disabled={scrollPosition >= 1227}
              onClick={handleScrollRight}
            >
              ▶
            </button>
          </div>

          <ul className="bottomnav" ref={bottomNavRef}>
            {generes.generes.map((genre) => (
              <li key={genre.id}>
                <Link
                  className={`$"bottomnavlink" ${
                    activeGenre === genre.genere ? "activegenre" : ""
                  }`}
                  href=""
                  onClick={() => handleGenreClick(genre.genere)}
                >
                  {genre.genere}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Background activeGenre={activeGenre} />
      </header>

      <section className="banner">
        <div className="bannercontainer">
          <picture>
            <img
              className="bannerimg"
              alt={title + " logo"}
              src={showLogo}
            ></img>
          </picture>
          <p id="short-desc">{desc}</p>
          <div className="bannericons">
            <Icon icon={MdFiberNew} />
            <Icon icon={AiFillInfoCircle} />
          </div>
          <div className="buttonbanner">
            <Link className="active" href="/videoplayer">
              Begynn å se
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
