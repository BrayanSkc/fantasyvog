import React, { useState } from "react";
import "./style.css";
import CardNews from "../../components/cardNews";
import Paginate from "../../components/paginate/index";

export interface NewsProps {}
const count = [1, 2, 3, 4, 5, 6, 7, 80];
const countMore = [1, 2, 3, 4];

const News: React.SFC<NewsProps> = () => {
  const [isDetails, setIsDetails] = useState(false);
  const goToBack = () => {
    setIsDetails(false);
  };

  return (
    <>
      <div className="news-container">
        <div className="news-box-container">
          <div className="news-contents-left">
            {!isDetails ? (
              <span className="title-box-play">
                <b>FXI</b> News
              </span>
            ) : (
              <span className="title-back-play" onClick={goToBack}>
                ← Back
              </span>
            )}
            {!isDetails ? (
              <div className="news-body-contents-left">
                <ul className="body-cards-list">
                  {count.map(item => (
                    <CardNews
                      key={item}
                      onClick={() => {
                        setIsDetails(true);
                      }}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <div className="news-details-container">
                  <div className="news-details-headers">
                    <img
                      src="https://www.mundodeportivo.com/r/GODO/MD/p7/Futbol/Imagenes/2020/03/24/Recortada/ec50a4ddb54441dd8390bb7e829d7251-k1aF-U4886955479vmB-980x554@MundoDeportivo-Web.jpg"
                      className="header-news"
                      alt="img-notice"
                    />
                  </div>
                  <div className="article-news-details">
                    <span className="text-head-news-details">
                      Guardiola dona un millón de euros
                    </span>
                    <span className="text-body-news-detail">
                      Guardiola ha donado a la Fundació Àngel Soler Daniel un
                      millón de euros para combatir el coronavirus. Una cifra
                      nada desdeñable que se va a destinar a la adquisición y
                      aprovisionamiento de material sanitario ante la emergencia
                      de la pandemia. Las donaciones para esta campaña, que
                      empezaron el pasado sábado, se pueden realizar a través de
                      la cuenta bancaria ES66 0182 4383 9002 0185 8057. Hasta
                      ahora, la suma total de la donación ascendía a 33.000
                      euros. Un gesto generoso por parte de Guardiola, que hace
                      apenas dos semanas se desmarcó de la posibilidad de jugar
                      a puerta cerrada: “No le veo el sentido. Sin gente en las
                      gradas no tiene ninguna lógica”, dijo el entrenador de
                      Santpedor pocas horas antes de que quedara suspendido el
                      encuentro entre el City y el Arsenal. Confinado en
                      Manchester, Pep contribuye con una donación que servirá
                      para luchar contra un virus que ha paralizado al mundo sin
                      conocer cuál será su fecha de caducidad.
                    </span>
                  </div>
                </div>
                <span className="title-box-play">
                  <b>FXI</b> News
                </span>
                <div className="news-more-footer">
                  {countMore.map(item => (
                    <CardNews
                      key={item}
                      onClick={() => {
                        setIsDetails(true);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="news-paginate-footer">
              {!isDetails ? (
                <Paginate
                  pageNumbers={countMore}
                  initialPage={1}
                />
              ) : (
                <span className="title-back-play" onClick={goToBack}>
                  More news →	
                </span>
              )}
            </div>
          </div>
          <div className="news-contest-right">
            <span>
              <b>ADVERTISING</b>
              <br /> HALF PAGE (300x600)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
