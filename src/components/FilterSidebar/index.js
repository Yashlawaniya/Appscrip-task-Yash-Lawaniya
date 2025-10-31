import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

const FilterSection = ({ title, id, children, isOpen, onToggle }) => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.filterHeader} onClick={() => onToggle(id)}>
        <h4 className={styles.filterTitle}>{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      
      {isOpen && (
        <div className={styles.filterOptions}>
          <span className={styles.allOption}>All</span>
          {children}
          <span className={styles.unselectLink}>Unselect all</span>
        </div>
      )}
    </div>
  );
};

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState(['ideal_for']);

  

  const toggleSection = (sectionId) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(sectionId)) {
        return prevOpenSections.filter((id) => id !== sectionId);
      } else {
        return [...prevOpenSections, sectionId];
      }
    });
  };

  const isSectionOpen = (sectionId) => openSections.includes(sectionId);

  return (
    <aside className={styles.sidebar}>

      <div className={`${styles.filterSection} ${styles.customizableSection}`}>
        <input type="checkbox" id="customizable" className={styles.checkbox} />
        <label htmlFor="customizable" className={styles.filterTitle}>CUSTOMIZABLE</label>
      </div>

      
      <FilterSection
        title="IDEAL FOR"
        id="ideal_for"
        isOpen={isSectionOpen('ideal_for')}
        onToggle={toggleSection}
      >
        <ul className={styles.filterList}>
          <li><input type="checkbox" id="men" /> <label htmlFor="men">Men</label></li>
          <li><input type="checkbox" id="women" /> <label htmlFor="women">Women</label></li>
          <li><input type="checkbox" id="baby" /> <label htmlFor="baby">Baby & Kids</label></li>
        </ul>
      </FilterSection>

      <FilterSection
        title="OCCASION"
        id="occasion"
        isOpen={isSectionOpen('occasion')}
        onToggle={toggleSection}
      >
      </FilterSection>

      <FilterSection
        title="WORK"
        id="work"
        isOpen={isSectionOpen('work')}
        onToggle={toggleSection}
      >
      </FilterSection>

      <FilterSection
        title="FABRIC"
        id="fabric"
        isOpen={isSectionOpen('fabric')}
        onToggle={toggleSection}
      >
      </FilterSection>

      <FilterSection
        title="SEGMENT"
        id="segment"
        isOpen={isSectionOpen('segment')}
        onToggle={toggleSection}
      >
      
      </FilterSection>

      <FilterSection
        title="SUITABLE FOR"
        id="suitable_for"
        isOpen={isSectionOpen('suitable_for')}
        onToggle={toggleSection}
      >
        
      </FilterSection>

      <FilterSection
        title="RAW MATERIALS"
        id="raw_materials"
        isOpen={isSectionOpen('raw_materials')}
        onToggle={toggleSection}
      >
        
      </FilterSection>
      
    </aside>
  );
};

export default FilterSidebar;