import React from 'react';
import { useParams } from 'react-router-dom';

const IndividualNotePage = () => {
  const { noteId } = useParams<{ noteId: string }>();
  return (
    <div>
      <h1>This is individual note page of {noteId}.</h1>
    </div>
  );
};

export default IndividualNotePage;
