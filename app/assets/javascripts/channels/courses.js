$(document).on('turbolinks:load', () => {
  let courseId = $('#course-id').data('course-id');
  App.messages = App.cable.subscriptions.create(
    {
      channel: 'AssignmentsChannel', 
      course: courseId
    }, 
    {
      connected: () => {
        console.log(`connected to assignment channel with id ${ courseId }`);
      },
  
      received: assignment => {
        console.log(assignment);
        $(`#assignment-list-${ assignment.course_id }`).append(`
          <div class="row better-row" style="padding-top: 25px; padding-bottom: 25px; background-color: rgb(242, 242, 242)">
            <div class="col-6"><a href="${ assignment.link }">${ assignment.name }</a></div>
            <div class="col-3">${ assignment.due_date }</div>
            <div class="col-3"><a href="${ assignment.link }" class="btn btn-outline-primary btn-sm">Show</a></div>
          </div>`
        );
      }
    }
  );
});
