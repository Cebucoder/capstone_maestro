
    // Your JSON data (replace with your actual JSON data)
    var project_capstone = [
        {
        "title": "Automated Inventory Management System",
        "description": "Develop a system to efficiently track and manage inventory for businesses.",
        "developer_name": "Cebucoder",
        "Problem Statement": "Inefficient inventory management can lead to overstocking, understocking, and financial losses for businesses. Manual inventory tracking methods are error-prone and time-consuming.",
        "Project Goals": "The goal of this project is to create an Automated Inventory Management System that optimizes inventory control, reduces operational costs, minimizes stockouts, and prevents overstocking.",
        "Methodology":"The project will involve the following phases: \n\n1. Research and Requirements Gathering: Understand the inventory management needs of businesses.\n\n2. System Design: Design a user-friendly and efficient inventory management system.\n\n3. Development: Create the system using appropriate technology and programming languages.\n\n4. Testing and Quality Assurance: Rigorously test the system's functionality and performance.\n\n5. Deployment: Implement the system in real business environments.\n\n6. Training and Support: Provide training to users and ongoing support.\n\n7.  Data Analysis: Use data collected from the system to optimize inventory control strategies.",
        "Expected_Deliverables": "1. Automated Inventory Management System\n\n2. User documentation and training materials\n\n3. System deployment in at least one business\n\n4. Data analysis report with inventory optimization recommendations\n\n5. Final project report and presentation",
        "Timeline_and_Milestones": "The project is expected to span over 6 months. Milestones include:\n\n- Month 1-2: Research and Requirements Gathering\n\n- Month 2-3: System Design and Development\n\n- Month 3-4: Testing and Quality Assurance\n\n- Month 4-5: Deployment and Training\n\n- Month 5-6: Data Analysis, Final Report, and Presentation",
        "Literature Review": "A comprehensive review of existing literature on inventory management systems and best practices in the field will be conducted to inform system design and strategy.",
        "Data Collection (if applicable)": "Data will be collected from businesses using the system, including inventory data, usage patterns, and feedback from users.",
        "Development or Implementation": "The system will be developed using a combination of programming languages and technologies, with an emphasis on scalability and user-friendliness.",
        "Testing and Evaluation": "Rigorous testing will be conducted to ensure the system meets project objectives, including functionality, performance, and user satisfaction.",
        "Documentation": "Detailed documentation of system design, development, and user training materials will be maintained throughout the project.",
        "Final Report and Presentation": "A comprehensive final report will document the entire project, including methodology, results, challenges, and conclusions. A presentation will be prepared to effectively communicate the findings and outcomes.",
        "Review and Feedback": "Feedback from business users and project advisors will be sought at various stages of the project to improve the quality of work.",
        "Revisions and Improvements": "The project is open to revisions and improvements based on feedback and ongoing evaluation.",
        "Final Submission": "Once the project is complete and all objectives are met, the final report will be submitted to the academic institution, and a presentation will be delivered.",
        "Reflection and Discussion": "A reflection on the entire capstone project experience will be included in the final report, discussing what has been learned, the challenges faced, and how the project contributes to the field of inventory management."
    },
    {
        "title": "Environmental Impact Analysis of Renewable Energy Sources",
        "description": "Study the environmental effects of various renewable energy technologies.",
        "developer_name": "Cebucoder",
        "Problem Statement": "Environmental concerns and climate change have made it crucial to analyze the environmental impact of renewable energy sources.",
        "Project Goals": "This project aims to assess and compare the environmental effects of different renewable energy technologies to inform sustainable energy policy decisions.",
        "Methodology": "The project will be executed through a series of steps:\n\n1. Research and Data Collection: Gather data on various renewable energy technologies and their environmental impacts.\n\n2. Environmental Analysis: Analyze the collected data to assess the environmental effects of each technology.\n\n3. Report and Recommendations: Generate a comprehensive report with findings and recommendations for policymakers.",
        "Expected_Deliverables": "1. Environmental impact analysis report\n\n2. Data collected and analyzed\n\n3. Recommendations for sustainable energy policy",
        "Timeline_and_Milestones": "The project timeline consists of the following milestones:\n\n- Months 1-2: Research and Data Collection\n\n- Months 2-3: Environmental Analysis\n\n- Months 3-4: Report and Recommendations",
        "Literature Review": "A literature review will be conducted to understand existing research on renewable energy technologies and environmental impact studies.",
        "Data Collection (if applicable)": "Data collection will involve the compilation of environmental data for various renewable energy sources.",
        "Development or Implementation": "The project does not involve software development; instead, it focuses on data analysis and report generation.",
        "Testing and Evaluation": "Quality control will be implemented to ensure the accuracy of data analysis and recommendations.",
        "Documentation": "All research notes, data, analysis methods, and the final report will be meticulously documented.",
        "Final Report and Presentation": "A detailed report summarizing the project findings and a presentation will be prepared to communicate results effectively.",
        "Review and Feedback": "Feedback from advisors and peers will be sought to enhance the quality of the analysis and recommendations.",
        "Revisions and Improvements": "Revisions and improvements will be made based on feedback and ongoing evaluation.",
        "Final Submission": "Upon completion, the final report and presentation will be submitted to the academic institution.",
        "Reflection and Discussion": "Reflection will encompass the learnings from the project, challenges faced, and contributions to the field of environmental analysis in renewable energy."
    },
    // {
    //     "title": "Machine Learning for Predictive Healthcare Analytics",
    //     "description": "Utilize machine learning to predict patient health outcomes.",
    //     "developer_name": "Cebucoder",
    //     "Problem Statement":"Inefficient inventory management can lead to a number of problems for businesses, including: Stockouts"
    //   },
    ];

    var currentIndex = 0;

    function displayProject(index) {
        var project = project_capstone[index];
        document.getElementById('title').innerHTML = project.title;
        document.getElementById('description').innerHTML = project.description;
        document.getElementById('developer_name').innerHTML = project.developer_name;

        var researchKeys = Object.keys(project);
        researchKeys = researchKeys.filter(key => key !== 'title' && key !== 'description');
        researchKeys.forEach((key, i) => {
            document.getElementById(key).innerHTML = `${project[key]}`;
            project.Methodology = project.Methodology.replace(/\n/g, '<br>');
            project.Expected_Deliverables = project.Expected_Deliverables.replace(/\n/g, '<br>');
            project.Timeline_and_Milestones = project.Timeline_and_Milestones.replace(/\n/g, '<br>');
        });
            document.getElementById('currentIndexDisplay').innerHTML = currentIndex + 1;
        document.getElementById('list-count').innerHTML = project_capstone.length;
    }



function GenerateTitle(){
    if (currentIndex < project_capstone.length) {
        displayProject(currentIndex);
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first project
        displayProject(currentIndex);
        currentIndex++;
    }
}
GenerateTitle();







