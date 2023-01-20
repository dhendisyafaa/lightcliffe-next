import React, { Component } from 'react'
import styles from '../styles/searchBar.module.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchbar}>
                <form action="#">
                    <input  className={styles.input} type="search" placeholder='Cari buku dari penulis favorit Anda'/>
                </form>
            </div>
        )
    }
}
