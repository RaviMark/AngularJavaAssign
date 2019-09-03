

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AddPersonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static BeanService beanService;
	static {
		beanService = new BeanService();
	}
    public AddPersonServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		BufferedReader br=request.getReader();
		String data;
		PersonBean obj;
		if((data=br.readLine())!=null) {
			obj=new PersonBean();
			String input[]=data.split(":|,");
			System.out.println(input[1].substring(1, input[1].length()-1));
			System.out.println(input[3].substring(1, input[3].length()-1));
			System.out.println(input[5].substring(1, input[5].length()-1));
			System.out.println(input[7].substring(0, input[7].length()-1));
			
			obj.setFirstName(input[1].substring(1, input[1].length()-1));
			obj.setLastName(input[3].substring(1, input[3].length()-1));
			obj.setEmail(input[5].substring(1, input[5].length()-1));
			obj.setAge(input[7].substring(0, input[7].length()-1));
			beanService.addBean(obj);
			
			System.out.println(beanService.getList().size());
		}
		
		response.getWriter().append("Data Inserted");
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
