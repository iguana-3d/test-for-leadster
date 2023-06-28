import React, { useState } from 'react';
import { ButtonNumber, CardModalContainer, GridCardsContainer } from './styles';
import Card from '../Card';
import { v4 as uuidv4 } from 'uuid';
import LightBox from '../lightboxes/LightBoxVideo';
import moment, { Moment } from 'moment';
import Select from '../Select';
import DownloadItemsModal from '../buttons/DownloadItemsModal';
import { useTheme } from 'styled-components';

interface ICardData {
  id: string;
  title: string;
  videoLink: string;
  iframe: React.ReactNode;
  description: string;
  createdAt: unknown;
}

const gridCardsdata: ICardData[] = [
  {
    id: uuidv4(),
    title: 'Qual a diferença entre os cookies first-party e third-party?',
    videoLink:
      'https://www.youtube.com/watch?v=sgddXeJfR64&list=PL_dirAhLkFrtHAc0agF5ejKWVSGnOw7vV',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sgddXeJfR64"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(1, 'd'),
  },
  {
    id: uuidv4(),
    title:
      'Como a extinção dos cookies third-party afeta os resultados de Mídia Paga?',
    videoLink:
      'https://www.youtube.com/watch?v=RTUv2XqBCYY&list=PL_dirAhLkFrtHAc0agF5ejKWVSGnOw7vV&index=2',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RTUv2XqBCYY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(2, 'd'),
  },
  {
    id: uuidv4(),
    title: 'Como as mudanças no Google Chrome ditam as mudanças do mercado?',
    videoLink:
      'https://www.youtube.com/watch?v=ilBeGn7P-ug&list=PL_dirAhLkFrtHAc0agF5ejKWVSGnOw7vV&index=3',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ilBeGn7P-ug"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
  },
  {
    id: uuidv4(),
    title: 'Como as empresas podem se preparar para um futuro sem cookies?',
    videoLink:
      'https://www.youtube.com/watch?v=ilBeGn7P-ug&list=PL_dirAhLkFrtHAc0agF5ejKWVSGnOw7vV&index=4',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SapejfZ5oSM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(4, 'd'),
  },
  {
    id: uuidv4(),
    title: 'Como saber de onde vêm os leads em um futuro sem cookies?',
    videoLink:
      'https://www.youtube.com/watch?v=ilBeGn7P-ug&list=PL_dirAhLkFrtHAc0agF5ejKWVSGnOw7vV&index=5',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cywm2tV1BCQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(1, 'd'),
  },
  {
    id: uuidv4(),
    title: 'O custo em mídia paga vai subir com a extinção dos cookies?',
    videoLink:
      'https://www.youtube.com/watch?v=ilBeGn7P-ug&list=PL_dirAhLkFrtHAc0agF5ejKWVSGnOw7vV&index=6',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/G_QAY_-P2z8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
  },
];

const GridCards: React.FC = () => {
  const [isOpenVideoLightbox, setIsOpenVideoLightbox] =
    useState<boolean>(false);
  const [cardData, setCardData] = useState<ICardData>({} as ICardData);
  const [orderBy, setOrderBy] = useState<string>('asc');
  const [page, setPage] = useState<number>(1);
  const perPage = 9;
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const cards = gridCardsdata.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(gridCardsdata.length / perPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const theme = useTheme();

  return (
    <GridCardsContainer>
      <div className="grid-cards-control">
        <div className="radio-group">
          <input type="radio" value="agency" name="button-group" id="agency" />
          <label className="label-button" htmlFor="agency">
            Agências
          </label>
          <input
            type="radio"
            value="chatbot"
            name="button-group"
            id="chatbot"
          />
          <label htmlFor="chatbot" className="label-button">
            ChatBot
          </label>
          <input
            type="radio"
            value="digital-marketing"
            name="button-group"
            id="digital-marketing"
          />
          <label htmlFor="digital-marketing" className="label-button">
            Marketing Digital
          </label>
          <input
            type="radio"
            value="leads-generation"
            name="button-group"
            id="leads-generation"
          />
          <label htmlFor="leads-generation" className="label-button">
            Geração de Leads
          </label>
          <input
            type="radio"
            value="payed-media"
            name="button-group"
            id="payed-media"
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
              onClick={() => setPage(numberPage)}
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
