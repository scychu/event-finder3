import React,{useEffect} from 'react';
import {Card,CardImg,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {useSelector, useDispatch} from "react-redux";
import {getCategories} from '../store/actions/events';

export default function CategoryList() {
    const dispatch = useDispatch();
    const catList = useSelector(state=>state.events.categories)
    useEffect(() => {
        dispatch(getCategories());
    },[dispatch]);

    const categories = catList && catList.map(item=>
        <Card className="list" key={item.id}>
            <a href={`/categories/${item.name}/${item.id}`}>
                <CardImg src={item.image} alt="Category image"/>
                {item.name}
            </a>
      </Card>
    )
    return (
        <div className="list-container">
            <div className="list-wrapper">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="/categories">Categories</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="category-list">
                {categories}
            </div>
        </div>
    )
}
