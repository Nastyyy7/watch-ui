'use client'

import styles from "./search.module.css";
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRouter } from 'next/navigation'

export default function Search() {
  const [filterName, setFilterName] = useState('')
  const [sort, setSort] = useState('')
  const [filterMinPrice, setFilterMinPrice] = useState('')
  const [filterMaxPrice, setFilterMaxPrice] = useState('')
  
  const router = useRouter()

  return (
    <>
      <form action="">
        <div className={styles.filter_search}>
          {/* name="filter[name]"  */}
          <input className={styles.filter_search_input} type="search" value={filterName} placeholder="Поиск"
            onChange={(event) => {
              setFilterName(event.target.value);
            }} />
          <button className={styles.filter_search_submit} type="button"
            onClick={(event) => {
              const link = {
                "filter[name]": filterName,
                "filter[price][>]": filterMinPrice,
                "filter[price][<]": filterMaxPrice,
                "sort": sort,
              }
              const searchParams = new URLSearchParams(link).toString();
              // console.log(searchParams);
              router.push('/catalog/?'+searchParams)
            }}></button>
        </div>
        <div className={styles.filter_choice}>
          <div className={styles.filter_choice_sort}>
            <div className={styles.filter_choice_sort_title}>
              <div className={styles.filter_choice_sort_title_icon} alt=""></div>
              <p className={styles.filter_choice_sort_title_text}>Сортировать:</p>
            </div>
            <div className={styles.filter_choice_sort_type}>
            <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                  value={sort}
                  onChange={(event, x) => {
                    setSort(x);
                  }}
                >
                  <FormControlLabel value="-id" control={<Radio />} label="Новинки" />
                  <FormControlLabel value="price" control={<Radio />} label="Сначала дешёвые" />
                  <FormControlLabel value="-price" control={<Radio />} label="Сначала дорогие" />
                  <FormControlLabel value="name" control={<Radio />} label="От А до Я" />
                  <FormControlLabel value="-name" control={<Radio />} label="От Я до А" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className={styles.filter_choice_price}>
            <div className={styles.filter_choice_price_title}>
              <div className={styles.filter_choice_price_title_icon} alt=""></div>
              <p className={styles.filter_choice_price_title_text}>Фильтрация:</p>
            </div>
            <div className={styles.filter_choice_price_type}>
              <p className={styles.filter_choice_price_type_text}>Цена, &#8381;</p>
              <div className={styles.filter_choice_price_type_form}>
                <p>От:</p>
                {/* name="filter[price][>]" */}
                <input className={styles.filter_choice_price_type_form_input} type="number" value={filterMinPrice} placeholder="0"
                  onChange={(event) => {
                    setFilterMinPrice(event.target.value);
                  }} />
                <p>До:</p>
                {/* name="filter[price][<]" */}
                <input className={styles.filter_choice_price_type_form_input} type="number" value={filterMaxPrice} placeholder="10000000"
                  onChange={(event) => {
                    setFilterMaxPrice(event.target.value);
                  }} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>

  )
}

export {
  Search,
};