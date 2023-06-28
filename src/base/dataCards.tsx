import moment from 'moment';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ICardData {
  id: string;
  title: string;
  iframe: React.ReactNode;
  description: string;
  createdAt: unknown;
  category: string;
}

export const gridCardsdata: ICardData[] = [
  {
    id: uuidv4(),
    title: 'Qual a diferença entre os cookies first-party e third-party?',
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
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title:
      'Como a extinção dos cookies third-party afeta os resultados de Mídia Paga?',
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
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'Como as mudanças no Google Chrome ditam as mudanças do mercado?',
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
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'Como as empresas podem se preparar para um futuro sem cookies?',
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
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'Como saber de onde vêm os leads em um futuro sem cookies?',
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
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'O custo em mídia paga vai subir com a extinção dos cookies?',
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
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'Como o ChatGPT popularizou a inteligência artificial?',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lqMXcSS6JwM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'O que é e como funciona o ChatGPT?',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BDwtdx_BawA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'Como é a relação do Google com o conteúdo gerado pelo ChatGPT?',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fybMJv1-ZPI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title:
      'Qual é o futuro da busca orgânica com a inteligência artificial e ferramentas como o ChatGPT?',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lSBM2UMibfI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'payed-media',
  },
  {
    id: uuidv4(),
    title: 'Inteligência artificial e empregabilidade',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/o6qeMW-UUb0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'payed-media',
  },
  {
    id: uuidv4(),
    title: 'Como treinar uma inteligência artificial?',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9RcQumcluZI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'payed-media',
  },
  {
    id: uuidv4(),
    title: 'Diferença entre palavras-chave de short e long tail no Google Ads',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KiLNo90ajxM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'digital-marketing',
  },
  {
    id: uuidv4(),
    title:
      'O que fazer se os eventos de conversao da Leadster aparecerem no GA4',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/juO5wXxF4c8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'chatbot',
  },
  {
    id: uuidv4(),
    title: 'Tutorial - Personalização de Páginas e Campanhas',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iHetrYfuJ-w"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'chatbot',
  },
  {
    id: uuidv4(),
    title: 'Como aumentar a Geração de Leads Qualificados do seu Site',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9L9ZkGX1p_k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'agency',
  },
  {
    id: uuidv4(),
    title: 'Tutorial - Personalização de Páginas e Campanhas',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iHetrYfuJ-w"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title:
      'Como aplicar chamadas inteligentes para gerar mais leads qualificados',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EFSpoXt1zrI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'leads-generation',
  },
  {
    id: uuidv4(),
    title: 'Como criar uma Chamada de Alta Conversão',
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Xfpr9JYX78A"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: moment().subtract(3, 'd'),
    category: 'leads-generation',
  },
];
