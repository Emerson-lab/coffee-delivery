import { ShoppingCart } from "phosphor-react";
import QunatityInput from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export type Coffee = {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

type CoffeeType = {
  coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeType) {
  const formatedPrice = formatMoney(coffee.price);
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>
        {coffee.name}
      </Name>

      <Description>
        {coffee.description}
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as={'strong'}>{formatedPrice}</TitleText>
        </div>

        <AddCartWrapper>
          <QunatityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}