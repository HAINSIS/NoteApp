import React, { useEffect, useState } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const NotePage = ({match, history}) => {

    let noteId = match.params.id
    let [note, setNote] = useState(null)

    useEffect(()=>{
        getNote()

    },[noteId])

    let getNote = async ()=>{
        if (noteId === 'new') return
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () =>{
        fetch(`/api/notes/${noteId}`,{
            method:"PUT",
            headers:{
                'content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () =>{
        fetch(`/api/notes/${noteId}`, {
            method:'DELETE',
            'headers': {
                'content-type': 'application/json'
            }
        })
        history.push('/')
    }

    let createNote = async () =>{
        fetch(`/api/notes/`,{
            method:"Post",
            headers:{
                'content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let handleSubmit = () =>{
        if (noteId !== 'new' && note.body === ''){
            deleteNote()
        }else if (noteId !== 'new'){
            updateNote()
        }else if (noteId === 'new' && note.body !== ''){
            createNote()
        }
        history.push('/')
    }

  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                    <ArrowLeft onClick={handleSubmit}/>         
            </h3>  
            {noteId !== 'new'? (
                <button onClick={deleteNote}>Delete</button>
            ) : (
                <button onClick={handleSubmit}>Done</button>
            )}    
      
        </div>
        <textarea onChange={(e) =>{setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>)
}

export default NotePage;
