import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function WovenImageList() {
    return (
        <ImageList variant="woven" cols={3} gap={8}>
            {itemData.map(item => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

const itemData = [
    {
        img: 'https://storage.googleapis.com/skylers/1.jpg',
        title: 'Bed'
    },
    {
        img: 'https://storage.googleapis.com/skylers/2.jpg',
        title: 'Kitchen'
    },
    {
        img: 'https://storage.googleapis.com/skylers/3.jpg',
        title: 'Sink'
    },
    {
        img: 'https://storage.googleapis.com/skylers/4.jpg',
        title: 'Books'
    },
    {
        img: 'https://storage.googleapis.com/skylers/5.jpg',
        title: 'Chairs'
    },
    {
        img: 'https://storage.googleapis.com/skylers/6.jpg',
        title: 'Candle'
    },
    {
        img: 'https://storage.googleapis.com/skylers/7.jpg',
        title: 'Laptop'
    },
    {
        img: 'https://storage.googleapis.com/skylers/8.jpg',
        title: 'Doors'
    },
    {
        img: 'https://storage.googleapis.com/skylers/9.jpg',
        title: 'Coffee'
    },
    {
        img: 'https://storage.googleapis.com/skylers/9.jpg',
        title: 'Storage'
    },
    {
        img: 'https://storage.googleapis.com/skylers/10.jpg',
        title: 'Coffee table'
    },
    {
        img: 'https://storage.googleapis.com/skylers/11.jpg',
        title: 'Blinds'
    },

    {
        img: 'https://storage.googleapis.com/skylers/12.jpg',
        title: 'Bed'
    },
    {
        img: 'https://storage.googleapis.com/skylers/13.jpg',
        title: 'Sink'
    },
    {
        img: 'https://storage.googleapis.com/skylers/14.jpg',
        title: 'Books'
    },
    {
        img: 'https://storage.googleapis.com/skylers/15.jpg',
        title: 'Chairs'
    },
    {
        img: 'https://storage.googleapis.com/skylers/16.jpg',
        title: 'Candle'
    },
    {
        img: 'https://storage.googleapis.com/skylers/17.jpg',
        title: 'Laptop'
    },
    {
        img: 'https://storage.googleapis.com/skylers/18.jpg',
        title: 'Doors'
    },
    {
        img: 'https://storage.googleapis.com/skylers/19.jpg',
        title: 'Coffee'
    },
    {
        img: 'https://storage.googleapis.com/skylers/20.jpg',
        title: 'Storage'
    },
    {
        img: 'https://storage.googleapis.com/skylers/21.jpg',
        title: 'Coffee table'
    },
    {
        img: 'https://storage.googleapis.com/skylers/22.jpg',
        title: 'Blinds'
    },
    {
        img: 'https://storage.googleapis.com/skylers/23.jpg',
        title: 'Sink'
    },
    {
        img: 'https://storage.googleapis.com/skylers/24.jpg',
        title: 'Books'
    },
    {
        img: 'https://storage.googleapis.com/skylers/25.jpg',
        title: 'Chairs'
    },
    {
        img: 'https://storage.googleapis.com/skylers/26.jpg',
        title: 'Candle'
    }
]
