import React from 'react';
import "./studentList.css"


const SortFilterBar = ({ sortBy, filters, handleSortChange, handleFilterChange, handleReset ,display, handleFilterBarToggle}) => 
 <div className="barContainer">
	<div>
		<button className="small-button" onClick={handleFilterBarToggle}>Filter</button>
	</div>
	<div className="sortFilterBar" style={{display: display}}>
		<SortByDropDown sortBy={sortBy} handleSortChange={handleSortChange} />
		<GradingTypeDropDown gradingType={filters.gradeType} handleGradeChange={handleFilterChange} />
		<SubjectByDropDown subject={filters.subject} handleSubjectChange={handleFilterChange} />
		<SearchTextInput searchText={filters.searchText} handleSearchChange={handleFilterChange} />
		<ResetSortFilterBar handleReset={handleReset} />
	</div>
 </div>


const SearchTextInput = ( {searchText, handleSearchChange }) => 
	<div className="barComponent">
		<label> Search </label>
		<input 
			value={ searchText} 
			onChange={ event => handleSearchChange('searchText', event.target.value)}
			type='text' 
			placeholder='search standard name'/>
	</div>

const SortByDropDown = ({sortBy, handleSortChange}) =>
	<div className="barComponent">
		<label> Sort by </label>
		<select 
			value={sortBy}
			onChange={event => handleSortChange(event.target.value)}>
			<option value='dateAscending'>Date Ascending</option>
			<option value='dateDescending'>Date Descending</option>
			<option value='alphaDescending'>Alphabetically Descending</option>
			<option value='alphaAscending'>Alphabetically Ascending</option>
		</select>
	</div>

const SubjectByDropDown = ({subject, handleSubjectChange}) =>
	<div className="barComponent">
		<label> Subject </label>
		<select 
			value={subject}
			onChange={event => handleSubjectChange('subject', event.target.value)}>
			<option value='all'>All</option>
			<option value='socialEmotional'>Social / Emotional</option>
			<option value='math'>Math</option>
			<option value='languageReading'>Language / Reading</option>
			<option value='motorSkills'>Motor Skills</option>
		</select>
	</div>


const GradingTypeDropDown= ({ gradeType, handleGradeChange}) =>
	<div className="barComponent">
		<label> Grading type </label>
		<select 
			value={gradeType}
			onChange={event => handleGradeChange('gradeType', event.target.value)}>
			<option value='all'>All</option>
			<option value='counting'>Counting</option>
			<option value='letterCounting'>Letters</option>
			<option value='criteria-categories'>Categories (+, ~, -)</option>
			<option value='criteria-number'>Categories Num Score</option>
		</select>
	</div>

//button to clear the filter sort bar 
const ResetSortFilterBar = ({handleReset}) => 
	<button className="small-button" onClick={handleReset}>Clear</button>


export default SortFilterBar;