import React from 'react';
import MarkButton from './components/MarkButton';
import BlockButton from './components/BlockButton';
import Separator from './components/Separator';

import boldIcon from '@plone/volto/icons/bold.svg';
import codeIcon from '@plone/volto/icons/code.svg';
import headingIcon from '@plone/volto/icons/heading.svg';
import italicIcon from '@plone/volto/icons/italic.svg';
import listBulletIcon from '@plone/volto/icons/list-bullet.svg';
import listNumberedIcon from '@plone/volto/icons/list-numbered.svg';
import quoteIcon from '@plone/volto/icons/quote.svg';
import subheadingIcon from '@plone/volto/icons/subheading.svg';
import underlineIcon from '@plone/volto/icons/underline.svg';

export const availableButtons = {
  bold: <MarkButton format="bold" icon={boldIcon} />,
  italic: <MarkButton format="italic" icon={italicIcon} />,
  underline: <MarkButton format="underline" icon={underlineIcon} />,
  code: <MarkButton format="code" icon={codeIcon} />,
  'heading-two': <BlockButton format="heading-two" icon={headingIcon} />,
  'heading-three': <BlockButton format="heading-three" icon={subheadingIcon} />,
  blockquote: <BlockButton format="block-quote" icon={quoteIcon} />,
  'numbered-list': (
    <BlockButton format="numbered-list" icon={listNumberedIcon} />
  ),
  'bulleted-list': <BlockButton format="bulleted-list" icon={listBulletIcon} />,
  separator: <Separator />,
};

export const defaultToolbarButtons = [
  'bold',
  'italic',
  'underline',
  'separator',
  'heading-two',
  'heading-three',
  'separator',
  'numbered-list',
  'bulleted-list',
  'blockquote',
];

export let toolbarButtons = [...defaultToolbarButtons];

export let expandedToolbarButtons = [...defaultToolbarButtons];

// console.log(
//   'Reevaluating config file with expandedToolbarButtons:',
//   expandedToolbarButtons,
// );

export const decorators = [];

export const hotkeys = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
  //'mod+&': 'mark-red',
};

export const listTypes = ['numbered-list', 'bulleted-list'];

export const availableLeafs = {
  bold: ({ children }) => {
    return <strong>{children}</strong>;
  },
  code: ({ children }) => {
    return <code>{children}</code>;
  },
  italic: ({ children }) => <em>{children}</em>,
  underline: ({ children }) => <u>{children}</u>,
};

export const leafs = ['bold', 'code', 'italic', 'underline'];
