'use client';

import { CardContent} from '@mui/material';
import { CardStyle, MainCardDiv, TypographyCount, TypographyOr } from './ProductCard.styled';

const SmallCard = () => {
    return (
        <MainCardDiv>
            <CardStyle>
                <CardContent>
                    <TypographyOr variant="body2">
                        Total Menu
                    </TypographyOr>
                    <TypographyCount variant="h5">
                        1243
                    </TypographyCount>
                </CardContent>
            </CardStyle>
            <CardStyle>
                <CardContent>
                    <TypographyOr variant="body2">
                        Total Users
                    </TypographyOr>
                    <TypographyCount variant="h5">
                        5423
                    </TypographyCount>
                </CardContent>
            </CardStyle>
            <CardStyle>
                <CardContent>
                    <TypographyOr variant="body2">
                       Recent Users
                    </TypographyOr>
                    <TypographyCount variant="h5">
                       54
                    </TypographyCount>
                </CardContent>
            </CardStyle>
        </MainCardDiv>
    );
};
export default SmallCard;