import { Container } from './styles';

import { Star } from './styles';

import { Tag } from '../Tag'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Note({data, ...rest}) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Star>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar  />
                <AiOutlineStar />
            </Star>
            <p>
                {data.description}
            </p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }  
                
        </Container>  
    )
}