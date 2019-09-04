
import java.io.BufferedReader;
import java.io.IOException;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SearchPersonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static BeanService beanService;
	static {
		beanService = new BeanService();
	}

	public SearchPersonServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setContentType("text/html");
		BufferedReader br=request.getReader();
		String data;
		PersonBean obj;
		if((data=br.readLine())!=null) {
			obj=new PersonBean();
			String input[]=data.split(":|,");
			String firstname = input[1].substring(1, input[1].length()-1);
			String lastname = input[3].substring(1, input[3].length()-1);
			String email = input[5].substring(1, input[5].length()-1);
			String age = input[7].substring(0, input[7].length()-1);
			System.out.println(firstname.length());
			System.out.println(lastname.length());
			System.out.println(email.length());
			System.out.println(age.length());
			if(firstname.length()!=0)
				obj.setFirstName(firstname);
			if(lastname.length()!=0)
				obj.setLastName(lastname);
			if(email.length()!=0)
				obj.setEmail(email);
			if(isNumeric(age))
				obj.setAge(age);
			
			List<PersonBean> searchList = beanService.searchBean(obj);
			
			if(searchList!=null) {
				Enumeration<PersonBean> enm = Collections.enumeration(searchList);
			      
			      while (enm.hasMoreElements()) {
			    	 PersonBean pb = enm.nextElement();
			    	 response.getWriter().append("  First Name : "+pb.getFirstName().toString());
			    	 response.getWriter().append(" Last Name : "+pb.getLastName().toString());
			    	 response.getWriter().append(" Email : "+pb.getEmail().toString());
			    	 response.getWriter().append(" Age : "+pb.getAge().toString()+"/**/");
			      }
			}
			if(searchList.size()==0) {
				response.getWriter().append("No Records Found");
			}
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
	
	public static boolean isNumeric(String strNum) {
	    try {
	        double d = Double.parseDouble(strNum);
	    } catch (NumberFormatException | NullPointerException nfe) {
	        return false;
	    }
	    return true;
	}

}
