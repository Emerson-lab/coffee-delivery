import { CoffeeCardContainer, Description, Name, Tags } from "./styles";

export default function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/bcfa/72ad/62a8600eeded092c17fd14240624545e?Expires=1700438400&Signature=WPVrbQiUSQ3RnNZNuQFn6rOPdBnOdD4kbme5ZoeT3vdsDa8Dwe9aWqpVkmEIQt1Cabx5RyhwQhnLilHtC1nwP4EsGENF90ip~OaKy-eNpbEqCoz-M-SBR4t6cIyzUl2ovj0GTAdjDmRKeS~SI6gemcazz7YS6VlIHjQWZIqudiG5VGeGyGWkHk2rF6t~fIKVZLS9BhX5w0YLzzAa2ibOdPeXA7WUzon8y8quHId7jE71G5QGMCBCqwZ5eJFGsquNKeBqhRQ0tEFB5Mt--wY4~OwZz8-XNfUeV38nJt89Ehuvgb4KRPcxcDBEvJmD4XNK7OU-dffsKbJEI7iFOBzAYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

      <Tags>
        <span>Tradiconal com leite</span>
        <span>com leite</span>
      </Tags>

      <Name>
        Café Tradicioanl
      </Name>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
    </CoffeeCardContainer>
  )
}