import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { ICardData, gridCardsdata } from '../../base/dataCards';
import Card from '../Card';
import Select from '../Select';
import DownloadItemsModal from '../buttons/DownloadItemsModal';
import LightBox from '../lightboxes/LightBoxVideo';
import { ButtonNumber, CardModalContainer, GridCardsContainer } from './styles';

const GridCards: React.FC = () => {
  const [isOpenVideoLightbox, setIsOpenVideoLightbox] =
    useState<boolean>(false);
  const [radioSelected, setRadioSelected] =
    useState<string>('leads-generation');
  const [cardData, setCardData] = useState<ICardData>({} as ICardData);
  const [orderBy, setOrderBy] = useState<string>('asc');
  const [page, setPage] = useState<number>(1);
  const perPage = 9;
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const cards = gridCardsdata
    .filter((card) => {
      return card.category === radioSelected;
    })
    .slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(
    gridCardsdata.filter((card) => {
      return card.category === radioSelected;
    }).length / perPage
  );
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const GridCardsRef = useRef<null | HTMLDivElement>(null);
  const theme = useTheme();

  const scrollToGridCards = () =>
    !!GridCardsRef &&
    !!GridCardsRef.current &&
    GridCardsRef.current.scrollIntoView();

  useEffect(() => {
    setPage(1);
  }, [radioSelected]);

  return (
    <GridCardsContainer>
      <div className="grid-cards-control" ref={GridCardsRef}>
        <div className="radio-group">
          <input
            type="radio"
            value="agency"
            name="button-group"
            id="agency"
            checked={radioSelected === 'agency'}
            onChange={(event) => setRadioSelected(event.target.value)}
          />
          <label className="label-button" htmlFor="agency">
            Agências
          </label>
          <input
            type="radio"
            value="chatbot"
            name="button-group"
            id="chatbot"
            checked={radioSelected === 'chatbot'}
            onChange={(event) => setRadioSelected(event.target.value)}
          />
          <label htmlFor="chatbot" className="label-button">
            ChatBot
          </label>
          <input
            type="radio"
            value="digital-marketing"
            name="button-group"
            id="digital-marketing"
            checked={radioSelected === 'digital-marketing'}
            onChange={(event) => setRadioSelected(event.target.value)}
          />
          <label htmlFor="digital-marketing" className="label-button">
            Marketing Digital
          </label>
          <input
            type="radio"
            value="leads-generation"
            name="button-group"
            id="leads-generation"
            checked={radioSelected === 'leads-generation'}
            onChange={(event) => setRadioSelected(event.target.value)}
          />
          <label htmlFor="leads-generation" className="label-button">
            Geração de Leads
          </label>
          <input
            type="radio"
            value="payed-media"
            name="button-group"
            id="payed-media"
            checked={radioSelected === 'payed-media'}
            onChange={(event) => setRadioSelected(event.target.value)}
          />
          <label htmlFor="payed-media" className="label-button">
            Mídia Paga
          </label>
        </div>
        <div className="select-group">
          <span>Ordenar por</span>
          <Select
            textLabel=""
            value={orderBy}
            onChange={(event) => setOrderBy(event.target.value)}
            options={[
              { optionName: 'Data de publicação', optionValue: 'asc' },
              { optionName: 'Mais antiga', optionValue: 'desc' },
            ]}
          />
        </div>
      </div>
      <div className="grid-cards">
        {cards
          .sort((a, b) => {
            if (orderBy === 'asc') {
              return (
                new Date(a.createdAt as Date).getTime() -
                new Date(b.createdAt as Date).getTime()
              );
            } else {
              return (
                new Date(b.createdAt as Date).getTime() -
                new Date(a.createdAt as Date).getTime()
              );
            }
          })
          .map((card) => {
            return (
              <Card
                title={card.title}
                key={card.id}
                onClick={() => {
                  setCardData(card);
                  setIsOpenVideoLightbox((prev) => !prev);
                }}
              />
            );
          })}
      </div>
      <div className="pagination">
        <span>Página</span>
        {numbers.map((numberPage) => {
          return (
            <ButtonNumber
              isActive={page === numberPage}
              key={numberPage}
              onClick={() => {
                setPage(numberPage);
                scrollToGridCards();
              }}
            >
              {numberPage}
            </ButtonNumber>
          );
        })}
      </div>
      {isOpenVideoLightbox && (
        <LightBox
          customLightboxWidth="70rem"
          handleOpenModal={() => setIsOpenVideoLightbox((prev) => !prev)}
          buttonsLeft={[
            <DownloadItemsModal
              key={1}
              iconBackground={theme.pallete.colors.others.green[3]}
              textAndIconColor={theme.pallete.colors.others.green[2]}
              textBackground={theme.pallete.colors.others.green[4]}
              text="Spreadsheet.xls"
            />,
            <DownloadItemsModal
              key={2}
              iconBackground={theme.pallete.colors.others.blue[9]}
              textAndIconColor={theme.pallete.colors.others.blue[8]}
              textBackground={theme.pallete.colors.others.blue[10]}
              text="Document.doc"
            />,
            <DownloadItemsModal
              key={3}
              iconBackground={theme.pallete.colors.others.yellow[2]}
              textAndIconColor={theme.pallete.colors.others.yellow[1]}
              textBackground={theme.pallete.colors.others.yellow[3]}
              text="Presentation.ppt"
            />,
            <DownloadItemsModal
              key={4}
              iconBackground={theme.pallete.colors.others.gray[18]}
              textAndIconColor={theme.pallete.colors.others.gray[17]}
              textBackground={theme.pallete.colors.others.gray[19]}
              text="Folder.zip"
            />,
          ]}
        >
          <CardModalContainer>
            <h3>
              <span>Webinar:</span>&nbsp;
              {cardData.title}
            </h3>
            <div className="iframe-container">{cardData.iframe}</div>
            <div className="card-modal-texts">
              <h4>Descrição</h4>
              <p>{cardData.description}</p>
              <h4>Downloads</h4>
              <div className="card-modal-buttons">
                <DownloadItemsModal
                  iconBackground={theme.pallete.colors.others.green[3]}
                  textAndIconColor={theme.pallete.colors.others.green[2]}
                  textBackground={theme.pallete.colors.others.green[4]}
                  text="Spreadsheet.xls"
                />
                <DownloadItemsModal
                  iconBackground={theme.pallete.colors.others.blue[9]}
                  textAndIconColor={theme.pallete.colors.others.blue[8]}
                  textBackground={theme.pallete.colors.others.blue[10]}
                  text="Document.doc"
                />
                <DownloadItemsModal
                  iconBackground={theme.pallete.colors.others.yellow[2]}
                  textAndIconColor={theme.pallete.colors.others.yellow[1]}
                  textBackground={theme.pallete.colors.others.yellow[3]}
                  text="Presentation.ppt"
                />
                <DownloadItemsModal
                  iconBackground={theme.pallete.colors.others.gray[18]}
                  textAndIconColor={theme.pallete.colors.others.gray[17]}
                  textBackground={theme.pallete.colors.others.gray[19]}
                  text="Folder.zip"
                />
              </div>
            </div>
          </CardModalContainer>
        </LightBox>
      )}
    </GridCardsContainer>
  );
};

export default GridCards;
