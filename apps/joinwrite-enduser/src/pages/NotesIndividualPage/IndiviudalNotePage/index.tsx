import React from 'react';
import { useParams } from 'react-router-dom';

console.log('hekoo');
const IndividualNotePage = () => {
  const params = useParams();
  console.log('Params:', params);
  console.log('hiiiii');
  const { noteId } = useParams<{ noteId: string }>();
  console.log(noteId);
  return (
    <div>
      <h1>This is individual note page of {noteId}.</h1>
    </div>
  );
};

export default IndividualNotePage;
