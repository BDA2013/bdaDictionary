/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Button, Chip, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import TopDrawer from './TopDrawer';
const MultipleChoice = (props) => {
    const [wordList, setWordList] = useState([]);
    const [definition, setDefinition] = useState([]);
    const [answer, setAnswer] = useState('');

    const MultiChoiceWords = () => {
        setAnswer('')
        fetch(`https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice?tag=${props.activeDictionary.tags[0]}`)
            .then((data) => data.json())
            .then((data) => {
                setWordList(data)
                setDefinition(data[(Math.floor(Math.random() * 4))])
            })
    }
    const checkDefinition = (word) => {
        if (word.definition === definition.definition) {
            setAnswer('Correct!')
        } else {
            setAnswer('Incorrect!')
        }
    };
    return (
        <Grid
            container
            spacing={4}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            display='flex'
        >
            <Grid item xs={12} >
                <TopDrawer />
            </Grid>
            <Grid item>
                <Button onClick={MultiChoiceWords} variant='contained'>
                    New Game
                </Button>
                <Grid item>
                    {definition.definition}
                </Grid>
                <Stack direction="column" spacing={1}>
                    {wordList && wordList.map((word, index) => (
                        <Chip
                            color={word._id === wordList._id ? 'primary' : 'secondary'}
                            label={word.word}
                            key={index}
                            onClick={() => {
                                checkDefinition(word)
                            }}
                        >
                        </Chip>
                    ))}
                </Stack>
            </Grid>
            <Grid item>
                {answer}
            </Grid>

        </Grid>
    )
};

export default MultipleChoice;