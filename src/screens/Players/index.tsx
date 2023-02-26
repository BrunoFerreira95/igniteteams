import { useState } from 'react'
import { FlatList } from 'react-native'

import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { PlayerCard } from '@components/PlayerCard'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Bruno', 'Diego'])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
       title='Nome da turma'
       subTitle='adicione a galera e separe os times'
       />
      
      <Form>
        <Input 
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />

        <ButtonIcon 
          icon='add'
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={['time a', 'time b']}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
      </HeaderList>
          
      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
      />
    </Container>
  )
}