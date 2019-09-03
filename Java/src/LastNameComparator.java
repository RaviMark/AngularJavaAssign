import java.util.Comparator;

public class LastNameComparator implements Comparator<Object>{
	@Override
	public int compare(Object o1, Object o2) {
		PersonBean s1=(PersonBean)o1;  
		PersonBean s2=(PersonBean)o2;  
		  
		return s1.getLastName().compareTo(s2.getLastName());
	}

}
