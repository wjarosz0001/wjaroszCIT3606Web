import streamlit as st

st.title("Tuition Net Calculator")

baseTution = 42540
miscFees = 2025
gpa_Scholarship = 0
pell_Grant = 7395
local_Scholarship = 5000

gpa_Input = st.number_input("Enter your High School or Transfer GPA:", min_value=0.0, max_value=4.0, step=0.01)
sai_Input = st.number_input("Enter your FAFSA SAI (Student Aid Index):", step=1)

isLocal = st.radio("Are you local to the area?", ("Yes", "No"))

if (gpa_Input >= 3.5):
    
    gpa_Scholarship = 20000
    st.balloons()  
    
if (sai_Input <= pell_Grant):

    pell_Grant -= sai_Input
    
else:
    pell_Grant = 0

if (isLocal == "No"):

    local_Scholarship = 0


st.success("Your estimated cost of tuition is: $" + str(baseTution + miscFees - gpa_Scholarship - pell_Grant - local_Scholarship))