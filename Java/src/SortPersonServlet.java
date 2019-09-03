
import java.io.BufferedReader;
import java.io.IOException;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SortPersonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static BeanService beanService;
	static {
		beanService = new BeanService();
	}

	public SortPersonServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		List<PersonBean> list = null;
		BufferedReader br=request.getReader();
		String data;
		if((data=br.readLine())!=null) {
			System.out.println("jnkn "+data);

			String input[]=data.split(":|,");
			String type = input[1].substring(1, input[1].length()-2);
			list = callSort(type);
		}
		if(list!=null) {
			Enumeration<PersonBean> enm = Collections.enumeration(list);
		      
		      while (enm.hasMoreElements()) {
		    	 PersonBean pb = enm.nextElement();
		    	 response.getWriter().append("  First Name : "+pb.getFirstName().toString());
		    	 response.getWriter().append(" Last Name : "+pb.getLastName().toString());
		    	 response.getWriter().append(" Email : "+pb.getEmail().toString());
		    	 response.getWriter().append(" Age : "+pb.getAge().toString()+"/**/");
		      }
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	private List<PersonBean> callSort(String type) {
		BeanProperty prop = null;
		switch (type) {
		case "First Name": {
			prop = BeanProperty.FIRSTNAME;
			break;
		}
		case "Last Name": {
			prop = BeanProperty.LASTNAME;
			break;
		}
		case "Email": {
			prop = BeanProperty.EMAIL;
			break;
		}
		case "Age": {
			prop = BeanProperty.AGE;
			break;
		}
		default:
			return null;
		}
		System.out.println(type);
		return beanService.sort(prop);

	}

}
