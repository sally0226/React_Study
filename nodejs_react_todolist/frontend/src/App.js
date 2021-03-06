import React, {useEffect, useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplates';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import {TodoProvider} from './TodoContext';
import TodoChangeDate from './components/TodoChangeDate';
import styled from 'styled-components';

import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const WrapAll = styled.div`
	display: flex;
	width: min-content; //min-content와 max-content의 차이? 
	margin:0 auto; //페이지 중앙에 오도록 설정
`;

function App() {

	return (
		<div>
			<Header>
			</Header>
			<TodoProvider>
		  	<GlobalStyle/>
				<WrapAll>
					<TodoChangeDate info="left">
					</TodoChangeDate>
					<TodoTemplate>
						<TodoHead></TodoHead>
						<TodoList></TodoList>
						<TodoCreate></TodoCreate>
					</TodoTemplate>
					<TodoChangeDate info="right">
					</TodoChangeDate>
				</WrapAll>
		</TodoProvider>
		</div>
		
	  );
  
}
export default App;
